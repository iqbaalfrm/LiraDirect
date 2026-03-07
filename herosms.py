import httpx
import asyncio
import time
import os

API_KEY = "3f392525d7d57d7fB04f819627d29202"

SERVICE = "wa"
COUNTRY = "4"
MAX_PRICE = "0.2"
DEFAULT_JUMLAH_NOMOR = 10

aktivasi = []

# ANSI colors (works on most modern terminals)
RESET = "\033[0m"
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
BOLD = "\033[1m"


def stamp():
    return time.strftime("%H:%M:%S")


def colorize(text, color):
    return f"{color}{text}{RESET}"


def log_info(msg):
    print(f"{colorize('[INFO]', CYAN)} [{stamp()}] {msg}")


def log_ok(msg):
    print(f"{colorize('[OK]', GREEN)} [{stamp()}] {msg}")


def log_warn(msg):
    print(f"{colorize('[WARN]', YELLOW)} [{stamp()}] {msg}")


def log_err(msg):
    print(f"{colorize('[ERR]', RED)} [{stamp()}] {msg}")


def line(width=56):
    return "+" + "-" * width + "+"


def print_box(title, subtitle=None):
    w = 56
    print("\n" + colorize(line(w), CYAN))
    print(colorize(f"| {title:<54} |", CYAN))
    if subtitle:
        print(colorize(f"| {subtitle:<54} |", CYAN))
    print(colorize(line(w), CYAN))


def clear_screen():
    os.system("cls")


def truncate(text, width):
    text = str(text)
    if len(text) <= width:
        return text
    if width <= 3:
        return text[:width]
    return text[: width - 3] + "..."


def tambah_aktivasi(activation_id, nomor, waktu):
    aktivasi.append(
        {
            "id": activation_id,
            "nomor": nomor,
            "waktu": waktu,
            "status": "MENUNGGU OTP",
            "otp": "-",
        }
    )


def set_status_aktivasi(activation_id, status=None, otp=None):
    for item in aktivasi:
        if item["id"] == activation_id:
            if status is not None:
                item["status"] = status
            if otp is not None:
                item["otp"] = otp
            return item
    return None


def map_status_server(status_code):
    mapping = {
        "1": "MENUNGGU OTP",
        "2": "OTP MASUK",
        "3": "SELESAI",
        "4": "MENUNGGU SMS",
        "6": "DIBATALKAN",
        "8": "DIBATALKAN",
    }
    return mapping.get(str(status_code), f"STATUS {status_code}")


async def sinkron_aktivasi_server(silent=False):
    async with httpx.AsyncClient() as client:
        r = await client.get(
            "https://hero-sms.com/stubs/handler_api.php",
            params={
                "action": "getActiveActivations",
                "api_key": API_KEY,
            },
        )

    try:
        payload = r.json()
    except Exception:
        log_err(f"Gagal parse data endpoint: {r.text}")
        return

    if payload.get("status") != "success":
        if not silent:
            log_warn(f"Endpoint tidak sukses: {payload}")
        return

    rows = payload.get("data") or payload.get("activeActivations", {}).get("rows") or []
    if not rows:
        if not silent:
            log_info("Tidak ada aktivasi aktif dari endpoint.")
        return

    new_count = 0
    upd_count = 0

    for row in rows:
        activation_id = str(row.get("activationId", ""))
        nomor = str(row.get("phoneNumber", ""))
        waktu = str(row.get("activationTime", "-"))
        otp = row.get("smsCode") or "-"
        status = map_status_server(row.get("activationStatus"))

        existing = set_status_aktivasi(activation_id, status=status, otp=otp)
        if existing:
            upd_count += 1
            continue

        tambah_aktivasi(activation_id, nomor, waktu)
        set_status_aktivasi(activation_id, status=status, otp=otp)
        new_count += 1

    if not silent:
        log_info(f"Sinkron endpoint selesai: +{new_count} baru, {upd_count} ter-update.")


def lihat_tabel_nomor():
    print_box("TABEL NOMOR & OTP", f"Total nomor tercatat: {len(aktivasi)}")

    if not aktivasi:
        log_warn("Belum ada nomor yang dibeli.")
        return

    headers = ("No", "ID Aktivasi", "Nomor", "Status", "OTP")
    widths = (4, 16, 18, 16, 10)
    sep = (
        "+"
        + "-" * widths[0]
        + "+"
        + "-" * widths[1]
        + "+"
        + "-" * widths[2]
        + "+"
        + "-" * widths[3]
        + "+"
        + "-" * widths[4]
        + "+"
    )

    print(colorize(sep, CYAN))
    print(
        colorize(
            f"|{headers[0]:^{widths[0]}}|{headers[1]:^{widths[1]}}|{headers[2]:^{widths[2]}}|{headers[3]:^{widths[3]}}|{headers[4]:^{widths[4]}}|",
            CYAN,
        )
    )
    print(colorize(sep, CYAN))

    for i, item in enumerate(aktivasi, 1):
        no = truncate(i, widths[0])
        act_id = truncate(item["id"], widths[1])
        nomor = truncate(item["nomor"], widths[2])
        status = truncate(item["status"], widths[3])
        otp = truncate(item["otp"], widths[4])
        print(f"|{no:^{widths[0]}}|{act_id:^{widths[1]}}|{nomor:^{widths[2]}}|{status:^{widths[3]}}|{otp:^{widths[4]}}|")

    print(colorize(sep, CYAN))


async def cek_saldo():
    async with httpx.AsyncClient() as client:
        r = await client.get(
            "https://hero-sms.com/stubs/handler_api.php",
            params={
                "action": "getBalance",
                "api_key": API_KEY,
            },
        )

        print_box("CEK SALDO")
        log_ok(f"Saldo saat ini: {r.text}")


async def beli_nomor(client):
    r = await client.get(
        "https://hero-sms.com/stubs/handler_api.php",
        params={
            "action": "getNumber",
            "service": SERVICE,
            "country": COUNTRY,
            "maxPrice": MAX_PRICE,
            "api_key": API_KEY,
        },
    )

    data = r.text

    if "ACCESS_NUMBER" in data:
        parts = data.split(":")
        activation_id = parts[1]
        nomor = parts[2]

        waktu = time.strftime("%H:%M:%S")

        tambah_aktivasi(activation_id, nomor, waktu)
        urutan = len(aktivasi)
        log_ok(f"Nomor ke-{urutan:02d} dibeli: {nomor} | Aktivasi: {waktu}")
    else:
        log_warn("Belum ada nomor murah / stok habis.")


async def cek_otp(client, activation_id, nomor):
    start_time = time.time()
    batas_waktu = 600  # 600 detik (10 menit)

    while True:
        r = await client.get(
            "https://hero-sms.com/stubs/handler_api.php",
            params={
                "action": "getStatus",
                "id": activation_id,
                "api_key": API_KEY,
            },
        )

        status = r.text

        if "STATUS_OK" in status:
            otp = status.split(":")[1]
            set_status_aktivasi(activation_id, status="OTP MASUK", otp=otp)

            log_ok(f"OTP masuk | {nomor} -> {otp}")

            with open("hasil_otp.txt", "a") as f:
                f.write(f"{nomor} | OTP: {otp}\n")

            return

        if time.time() - start_time > batas_waktu:
            log_warn(f"OTP {nomor} tidak masuk, membatalkan nomor...")

            await client.get(
                "https://hero-sms.com/stubs/handler_api.php",
                params={
                    "action": "setStatus",
                    "status": "8",
                    "id": activation_id,
                    "api_key": API_KEY,
                },
            )

            set_status_aktivasi(activation_id, status="TIMEOUT/CANCEL")
            log_warn(f"Nomor {nomor} berhasil dicancel")

            return

        await asyncio.sleep(5)


async def batal_nomor():
    print_box("BATALKAN ORDER")
    id_order = input(colorize("Masukkan ID Aktivasi yang mau dibatalkan: ", BOLD))

    async with httpx.AsyncClient() as client:
        r = await client.get(
            "https://hero-sms.com/stubs/handler_api.php",
            params={
                "action": "setStatus",
                "status": "8",
                "id": id_order,
                "api_key": API_KEY,
            },
        )

        set_status_aktivasi(id_order, status="DIBATALKAN")
        log_info(f"Respon API: {r.text}")


async def beli_otomatis(jumlah_nomor):
    async with httpx.AsyncClient() as client:
        print_box("AUTO BELI NOMOR", f"Target: {jumlah_nomor} nomor | Service: {SERVICE}")
        log_info("Mencari nomor WhatsApp Philippines...")

        jumlah_awal = len(aktivasi)
        target_total = jumlah_awal + jumlah_nomor

        while len(aktivasi) < target_total:
            tasks = []

            for _ in range(jumlah_nomor):
                tasks.append(beli_nomor(client))

            await asyncio.gather(*tasks)

            if len(aktivasi) < target_total:
                sisa = target_total - len(aktivasi)
                log_warn(f"Menunggu restock... sisa target: {sisa}")
                await asyncio.sleep(3)

        batch_baru = aktivasi[jumlah_awal:target_total]
        print_box("MENUNGGU OTP", f"Total aktivasi batch ini: {len(batch_baru)}")

        tasks = []

        for item in batch_baru:
            tasks.append(cek_otp(client, item["id"], item["nomor"]))

        await asyncio.gather(*tasks)


async def monitor_tabel_otp(interval_detik=5):
    while True:
        await sinkron_aktivasi_server(silent=True)
        clear_screen()
        print_box("MONITOR OTP LIVE", "Tekan Ctrl+C untuk kembali ke menu")
        print(colorize(f"Update terakhir: {stamp()} | Refresh: {interval_detik} detik", CYAN))
        lihat_tabel_nomor()
        await asyncio.sleep(interval_detik)


def menu():
    while True:
        print_box(f"{BOLD}BOT OTP WHATSAPP - HERO SMS{RESET}", "Pilih menu di bawah ini")
        print("  1) Lihat Saldo")
        print("  2) Beli Nomor (Custom)")
        print("  3) Batalin Order")
        print("  4) Lihat Nomor & Status OTP")
        print("  5) Keluar")

        pilih = input(colorize("\nPilih menu: ", BOLD))

        if pilih == "1":
            asyncio.run(cek_saldo())

        elif pilih == "2":
            jumlah_input = input(
                colorize(
                    f"Masukkan jumlah nomor (default {DEFAULT_JUMLAH_NOMOR}): ",
                    BOLD,
                )
            ).strip()

            if not jumlah_input:
                jumlah_nomor = DEFAULT_JUMLAH_NOMOR
            elif jumlah_input.isdigit() and int(jumlah_input) > 0:
                jumlah_nomor = int(jumlah_input)
            else:
                log_err("Jumlah tidak valid. Gunakan angka > 0.")
                continue

            asyncio.run(beli_otomatis(jumlah_nomor))

        elif pilih == "3":
            asyncio.run(batal_nomor())

        elif pilih == "4":
            interval_input = input(
                colorize("Interval refresh detik (default 5): ", BOLD)
            ).strip()

            if not interval_input:
                interval_detik = 5
            elif interval_input.isdigit() and int(interval_input) > 0:
                interval_detik = int(interval_input)
            else:
                log_err("Interval tidak valid. Gunakan angka > 0.")
                continue

            try:
                asyncio.run(monitor_tabel_otp(interval_detik))
            except KeyboardInterrupt:
                log_info("Keluar monitor, kembali ke menu utama.")

        elif pilih == "5":
            log_info("Program selesai.")
            break

        else:
            log_err("Menu tidak ada, pilih 1-5.")


if __name__ == "__main__":
    menu()

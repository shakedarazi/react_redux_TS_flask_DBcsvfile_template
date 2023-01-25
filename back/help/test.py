import csv
CSV_FILE = "diamonds.csv"

import csv

def save_csv(data,CSV_FILE):
    with open(CSV_FILE, 'w', newline='') as file:
        fieldnames = data[0].keys()
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)


def load_csv():
    data = []
    with open(CSV_FILE, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data









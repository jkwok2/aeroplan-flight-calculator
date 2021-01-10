import csv
import json

csvfile = open('airports.csv', 'r')
jsonfile = open('airports.json', 'w')

# populates airports.json with data
fieldnames = ("code", "location","long", "lat")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    
    newDict = {}
    newDict.setdefault(row["code"], {})["location"] = row["location"]
    newDict.setdefault(row["code"], {})["long"] = row["long"]
    newDict.setdefault(row["code"], {})["lat"] = row["lat"]

    json.dump(newDict, jsonfile)
    jsonfile.write('\n')

csvfile.close()
jsonfile.close()

# manipulates data to add commas
# Open File
file1 = open('airports.json', 'r') 
Lines = file1.readlines()
file1.close() 

# open write file
file2 = open('airports.json', 'w') 

for line in Lines:
    correctedline = line[1:len(line)-2]
    file2.write(correctedline)
    file2.write(",\n")

file2.close()

import requests

url = "http://localhost:8080/"

headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

response = requests.request("GET", url, headers=headers)

jsonObj = response.json()

print('JSON Object : ', jsonObj)

print('\nCompany : ', jsonObj['Vendor'])
print('Head Quaters : ', jsonObj['HQ'])
print('Technologies :')

for technology in jsonObj['Technologies']:
    print(' - ', technology)

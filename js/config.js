window.ALAD_CONFIG = {
  "stageWidth": 768,
  "stageHeight": 384,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mueidxh7aspx93",
  "backgrounds": [
    {
      "id": "b_mufp2ygstywbni",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mueidxh7aspx93/1790264211752_fondo_realtime.mp4",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mueieyg02fhvdn",
      "type": "api",
      "url": "https://docs.google.com/spreadsheets/d/15srWgvwc2y-oDT7mrih8COANShyVPragvgMEl_nSD6E/gviz/tq?tqx=out:json&gid=1578970820",
      "refreshMin": 1,
      "cache": false,
      "fields": [
        {
          "token": "{Foto}",
          "path": "[0].Foto"
        },
        {
          "token": "{Frase}",
          "path": "[0].Frase"
        },
        {
          "token": "{SoloNombre}",
          "path": "[0].SoloNombre"
        },
        {
          "token": "{SoloCargo}",
          "path": "[0].SoloCargo"
        }
      ]
    }
  ],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [],
  "elements": [
    {
      "id": "foto_api",
      "type": "image",
      "imageSrc": "{Foto}",
      "x": 0,
      "y": 0,
      "width": 47,
      "height": 100,
      "objectFit": "cover",
      "zIndex": 10,
      "condition": {
        "type": "showFor",
        "delay": 4.5,
        "showFor": 99999
      }
    },
    {
      "id": "frase_api",
      "type": "text",
      "text": "{Frase}",
      "x": 48,
      "y": 15,
      "width": 45,
      "height": 55,
      "fitText": true,
      "fontSize": 48,
      "color": "#000000",
      "fontFamilyKey": "Myriad Pro Bold",
      "fontWeight": "normal",
      "align": "right",
      "valign": "center",
      "zIndex": 10,
      "condition": {
        "type": "showFor",
        "delay": 3.6,
        "showFor": 99999
      }
    },
    {
      "id": "nombre_api",
      "type": "text",
      "text": "{SoloNombre} <span style='color: #f39c12;'>{SoloCargo}</span>",
      "x": 48,
      "y": 75,
      "width": 45,
      "height": 20,
      "fitText": true,
      "fontSize": 20,
      "color": "#000000",
      "fontFamilyKey": "Myriad Pro Semibold",
      "fontWeight": "normal",
      "align": "right",
      "zIndex": 10,
      "condition": {
        "type": "showFor",
        "delay": 3.6,
        "showFor": 99999
      }
    }
  ]
};

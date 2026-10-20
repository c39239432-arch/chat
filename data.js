var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.01781271822870245,
        "pitch": -0.34347985910073575,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01781271822870245,
          "pitch": -0.34347985910073575,
          "title": "Title",
          "text": "Fachada principal<div><br></div>"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Title",
          "text": "Vista interior"
        }
      ]
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.013765779299701464,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.11033740074222642,
          "pitch": -0.22111197099523494,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0040437028635018635,
          "pitch": -0.3716145292783022,
          "title": "Title",
          "text": "Fachada lateral"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

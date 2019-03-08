import React from "react";
import ReactDOM from "react-dom";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Pdf from './PDF'
import "./styles.css";

const getRandomColor = () => {
  const letters = 'BCDEF'.split('')
  let color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const sampleData = {
  "color": getRandomColor(),
  "filename": "johnnylogan",
  "contact": {
    "firstName": "Thordur",
    "lastName": "Haflidason",
    "image": "https://placekitten.com/150/200",
    "info": [
      "Laugavegur 1",
      "101 Reykjavík",
      "https://www.thordurh.com",
      "github: @thordurhhh",
      "twitter: @tolleinn"
    ]
  },
  "sections": [
    {
      "type": "full",
      "sectionTitle": "Work",
      "items": [
        {
          "from": "2014",
          "to": "Current",
          "title": "Web Developer",
          "sub": "Front-end",
          "text": "I am a front end developer."
        }
      ]
    },
    {
      "type": "full",
      "sectionTitle": "Education",
      "items": [
        {
          "from": "2010",
          "to": "2019",
          "title": "Lorem",
          "sub": "Ipsum",
          "text": "Massa torquent laoreet suscipit malesuada venenatis netus habitasse mus amet, aptent fermentum aliquet suscipit sociis."
        },
        {
          "from": "2001",
          "to": "2010",
          "title": "Lorem",
          "sub": "Ipsum",
          "text": "Massa torquent laoreet suscipit malesuada venenatis netus habitasse mus amet, aptent fermentum aliquet suscipit sociis."
        }
      ]
    },
    {
      "type": "text",
      "sectionTitle": "Language Skills",
      "items": [
        {
          "text": "Lorem ipsum is my native language so I speak it fluently. My Icelandic is ok, and I can manage with Danish."
        },
        {
          "text": "This text goes on the next line"
        }
      ]
    },
    {
      "type": "two",
      "sectionTitle": "Skills",
      "items": [
        {
          "title": "React",
          "text": "This is made with React."
        },
        {
          "title": "CSS",
          "text": "This has CSS in JS. Don't @ me."
        },
        {
          "title": "Javascript",
          "text": "Great."
        }
      ]
    },
    {
      "type": "three",
      "sectionTitle": "Recommendations",
      "items": [
        {
          "text1": "John Smith",
          "text2": "Owner of things",
          "text3": "555 5555"
        }
      ]
    }
  ]
}

class JSONPdf extends React.Component {
  constructor () {
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: sampleData
      })
    }, 300)
  }

  getJosonFromEditor = (data) => {
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="jsonpdf-wrapper">
        <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
          <JSONInput
            placeholder={sampleData} // data to display
            onChange={d => this.getJosonFromEditor(d.jsObject)}
            theme="light_mitsuketa_tribute"
            locale={locale}
            height="93vh"
            theme="dark_vscode_tribute"
            width="100%"
          />
        </div>
        <div>
          <Pdf
            width="100%"
            height="100%"
            info={this.state.data || {}}
          />
        </div>
      </div>
    );
  }
}

export default JSONPdf

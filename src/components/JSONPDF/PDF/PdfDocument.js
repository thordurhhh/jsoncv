import React from "react";
import SectionTable from "./sectionTable";
import get from "lodash.get";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image as ThePic,
  Font
} from "@react-pdf/renderer";

// FONTS HERE: https://github.com/alexvcasillas/Google-Fonts-JSON-to-Google-Font-Format/blob/master/google-fonts.json
Font.register(
  "https://fonts.gstatic.com/s/lato/v11/v0SdcGFAl2aezM9Vq_aFTQ.ttf",
  { family: "Lato" }
);

Font.register(
  "https://fonts.gstatic.com/s/lato/v11/DvlFBScY1r-FMtZSYIYoYw.ttf",
  { family: "LatoBold" }
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 25
  },
  pageTop: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
  },
  pageBottom: {
    padding: 30
  },
  image: {
    width: 120,
    height: 170
  },
  imgContainer: {
    borderRadius: 0,
    borderWidth: 2,
    marginTop: -80
  },
  thisTitle: {
    fontSize: 26,
    color: "#000000",
    marginBottom: 3,
    fontFamily: "LatoBold" // hugsanlega annan title font.
  },
  textItem: {
    fontFamily: "Lato",
    fontSize: 18
  },
  textItemDetail: {
    fontFamily: "Lato",
    fontSize: 16
  },
  textItemTitle: {
    fontFamily: "LatoBold",
    fontSize: 17
  },
  detailText: {
    fontSize: 11,
    fontWeight: 100,
    color: "#666666",
    marginTop: 5
  },
  sectionHalves: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "30 30 30 30"
  },
  sectionHalf: {
    maxWidth: "50%"
  },
  aThird: {
    width: "33.3%"
    // textAlign: "center"
  },
  section: {
    width: "100%",
    marginBottom: 25
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "LatoBold",
    textTransform: "uppercase",
    marginBottom: 2
  },
  table: {
    flexDirection: "row",
    marginBottom: 15
  },
  tableLeft: {
    width: '26%',
    marginRight: 30
    // textAlign: 'right',
  },
  tableRight: {
    flexGrow: 1
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#403b3b",
    marginBottom: 5,
    marginTop: 5
  },
  mb3: {
    marginBottom: 3
  },
  emptyStyle: {
    marginBottom: 0 // fix for pdf viewer. Needs a class.
  }
});

const PartTypeFull = ({ section }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
    <View style={styles.line} />
    {section.items.map((item, i) => {
      return (
        <SectionTable
          date={
            item.from && item.to
              ? `${item.from} - ${item.to}`
              : ""
          }
          school={item.title || ""}
          class={item.sub || ""}
          detail={item.text || ""}
          key={`full-${i}`}
        />
      );
    })}
  </View>
)

const PartTypeTwoWay = ({ section }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
    <View style={styles.line} />
    {
      section.items.map((item, i) => (
        <View style={styles.table} key={`twoway-${i}`}>
          <View style={styles.tableLeft}>
            <Text style={styles.textItemTitle}>
              {item.title}
            </Text>
          </View>
          <View style={styles.tableRight}>
            <Text style={styles.textItem}>{item.text}</Text>
          </View>
        </View>
      )
    )}
  </View>
)

const PartTypeText = ({ section }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
    <View style={styles.line} />
        <View style={styles.table}>
        <View style={styles.tableRight}>
          { section.items.map((item, i) => <Text key={`texttype-${i}`} style={styles.textItemDetail}>{item.text}</Text>) }
      </View>
    </View>
  </View>
)

const PartTypeThreeWay = ({ section }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
    <View style={styles.line} />
    {
      section.items.map((item, i) => (
        <View key={`threeway-${i}`} style={styles.table}>
          <View style={styles.aThird}>
            <Text style={styles.first}>{item.text1}</Text>
          </View>
          <View style={styles.aThird}>
            <Text style={styles.second}>{item.text2}</Text>
          </View>
          <View style={styles.aThird}>
            <Text style={styles.textItemDetail}>{item.text3}</Text>
          </View>
        </View>
      )
    )}
  </View>
)

const TypesOfSectionsSorter = ({ section }) => {
  const sectionType = get(section, 'type')
  switch (sectionType) {
    case "full":
      return <PartTypeFull section={section} />
    case "text":
      return <PartTypeText section={section} />
    case "two":
      return <PartTypeTwoWay section={section} />
    case "three":
      return <PartTypeThreeWay section={section} />
    default:
      return null
  }
}

// https://www.bifrost.is/files/skra_0039880.pdf
const MyDocument = ({ info }) => {
  const dynamicColor = get(info, "color")
  const validColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(dynamicColor) ? dynamicColor : '#ebebeb'
  const dynamicStyles = StyleSheet.create({
    imgContainer: {
      borderColor: validColor,
    },
    sectionHalves: {
      backgroundColor: validColor
    }
  })

  const infoArray = get(info, "contact.info", [])
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageTop}>
          <View style={styles.sectionHalf}>
            <Text style={styles.thisTitle}>{`${get(
              info,
              "contact.firstName",
              ""
            )} ${get(info, "contact.lastName", "")}`}</Text>
          </View>
        </View>
        <View style={{ ...dynamicStyles.sectionHalves, ...styles.sectionHalves }}>
          <View style={styles.sectionHalf}>
          {
            infoArray.map((item, i) => (
              <Text style={{ ...styles.textItem, ...styles.mb3 }}>
                {item}
              </Text>
            )
          )}
          </View>
          <View style={styles.sectionHalf}>
            {
              get(info, "contact.image", null) ? (
                <View style={{ ...dynamicStyles.imgContainer, ...styles.imgContainer }}>
                  <ThePic
                    style={styles.image}
                    src={get(info, "contact.image")}
                  />
                </View>
              ) : <View style={{ ...dynamicStyles.imgContainer, ...styles.imgContainer }} />
            }
          </View>
        </View>
        <View style={styles.pageBottom}>
          {
            info && info.sections && info.sections.length > 0 && (
              info.sections.map((item, i) => (
                <TypesOfSectionsSorter key={`section-${i}`} section={item} />
              ))
            )
          }
        </View>
      </Page>
    </Document>
  )
};

export default MyDocument;

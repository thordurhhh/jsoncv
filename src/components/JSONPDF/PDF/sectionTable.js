import React from "react";

import { Text, View, Font, StyleSheet } from "@react-pdf/renderer";

// FONTS HERE: https://github.com/alexvcasillas/Google-Fonts-JSON-to-Google-Font-Format/blob/master/google-fonts.json
Font.register(
  "http://fonts.gstatic.com/s/lato/v11/v0SdcGFAl2aezM9Vq_aFTQ.ttf",
  { family: "Lato" }
);

Font.register(
  "http://fonts.gstatic.com/s/lato/v11/DvlFBScY1r-FMtZSYIYoYw.ttf",
  { family: "LatoBold" }
);

const styles = StyleSheet.create({
  textItem: {
    fontFamily: "Lato",
    fontSize: 18
  },
  textItemTitle: {
    fontFamily: "LatoBold",
    fontSize: 19
  },
  detailText: {
    fontSize: 11,
    fontWeight: 100,
    color: "#666666",
    marginTop: 5
  },
  table: {
    flexDirection: "row",
    marginBottom: 15
  },
  tableLeft: {
    width: '30%',
    marginRight: 10
  },
  tableRight: {
    flexGrow: 1,
    width: '65%'
  }
});

// Create Document Component https://www.bifrost.is/files/skra_0039880.pdf
const SectionTable = props => (
  <View style={styles.table}>
    <View style={styles.tableLeft}>
      <Text style={styles.textItemTitle}>{props.date}</Text>
    </View>
    <View style={styles.tableRight}>
      <Text style={styles.textItem}>{props.class}</Text>
      <Text style={styles.textItem}>{props.school}</Text>
      <Text style={styles.detailText}>
        {props.detail ? props.detail : null}
      </Text>
    </View>
  </View>
);

export default SectionTable;

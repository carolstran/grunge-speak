const elements = [...document.body.getElementsByTagName("*")];

const generateGrungyText = () => {
  elements.forEach(element => {
    element.childNodes.forEach(child => {
      // Checks for Node.TEXT_NODE aka the actual text inside the element
      if (child.nodeType === 3) {
        let text = child.nodeValue;

        text = text.replace(/loser/gi, "COB NOBBLER");
        text = text.replace(/drunk/gi, "BLOATED");
        text = text.replace(/night in/gi, "BOUND-AND-HAGGED");
        text = text.replace(/hot guy/gi, "DISH");
        text = text.replace(/sweater/gi, "FUZZ");
        text = text.replace(/bummer/gi, "HARSH REALM");
        text = text.replace(/boots/gi, "KICKERS");
        text = text.replace(/uncool/gi, "LAMESTAIN");
        text = text.replace(/platform shoes/gi, "PLATS");
        text = text.replace(/bye/gi, "ROCK ON");
        text = text.replace(/great/gi, "SCORE");
        text = text.replace(/hanging out/gi, "SWINGIN' ON THE FLIPPITY-FLOP");
        text = text.replace(/outsiders/gi, "TOM-TOM CLUB");
        text = text.replace(/ripped jeans/gi, "WACK SLACKS");

        child.nodeValue = text;
      }
    });
  });
};

window.onload = generateGrungyText();

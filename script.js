function bs (sn,rn) {
    if (sn=='1' && rn=='0') {
        seat = "Lower Berth"
    } else if (sn=='2' && rn=='0') {
        seat = "Middle Berth"
    } else if (sn=='3' && rn=='0') {
        seat = "Upper Berth"
    } else if (sn=='7' && rn=='0') {
        seat = "Side Lower Berth"
    }

    if ((sn=='4' || sn=='9') && rn=='1') {
        seat = "Lower Berth"
    } else if ((sn=='5' || sn=='10') && rn=='1') {
        seat = "Middle Berth"
    } else if ((sn=='6' || sn=='11') && rn=='1') {
        seat = "Upper Berth"
    } else if (sn=='8' && rn=='1') {
        seat = "Side Upper Berth"
    } else if (sn=='15' && rn=='1') {
        seat = "Side Lower Berth"
    }

    if ((sn=='12' || sn=='17') && rn=='2') {
        seat = "Lower Berth"
    } else if ((sn=='13' || sn=='18') && rn=='2') {
        seat = "Middle Berth"
    } else if ((sn=='14' || sn=='19') && rn=='2') {
        seat = "Upper Berth"
    } else if (sn=='16' && rn=='2') {
        seat = "Side Upper Berth"
    } else if (sn=='23' && rn=='2') {
        seat = "Side Lower Berth"
    }

    if ((sn=='20' || sn=='25') && rn=='3') {
        seat = "Lower Berth"
    } else if ((sn=='21' || sn=='26') && rn=='3') {
        seat = "Middle Berth"
    } else if ((sn=='22' || sn=='27') && rn=='3') {
        seat = "Upper Berth"
    } else if (sn=='24' && rn=='3') {
        seat = "Side Upper Berth"
    } else if (sn=='31' && rn=='3') {
        seat = "Side Lower Berth"
    }

    if ((sn=='28' || sn=='33') && rn=='4') {
        seat = "Lower Berth"
    } else if ((sn=='29' || sn=='34') && rn=='4') {
        seat = "Middle Berth"
    } else if ((sn=='30' || sn=='35') && rn=='4') {
        seat = "Upper Berth"
    } else if (sn=='32' && rn=='4') {
        seat = "Side Upper Berth"
    } else if (sn=='39' && rn=='4') {
        seat = "Side Lower Berth"
    }

    if ((sn=='36' || sn=='41') && rn=='5') {
        seat = "Lower Berth"
    } else if ((sn=='37' || sn=='42') && rn=='5') {
        seat = "Middle Berth"
    } else if ((sn=='38' || sn=='43') && rn=='5') {
        seat = "Upper Berth"
    } else if (sn=='40' && rn=='5') {
        seat = "Side Upper Berth"
    } else if (sn=='47' && rn=='5') {
        seat = "Side Lower Berth"
    }

    if ((sn=='44' || sn=='49') && rn=='6') {
        seat = "Lower Berth"
    } else if ((sn=='45' || sn=='50') && rn=='6') {
        seat = "Middle Berth"
    } else if ((sn=='46' || sn=='51') && rn=='6') {
        seat = "Upper Berth"
    } else if (sn=='48' && rn=='6') {
        seat = "Side Upper Berth"
    } else if (sn=='55' && rn=='6') {
        seat = "Side Lower Berth"
    }

    if ((sn=='52' || sn=='57') && rn=='7') {
        seat = "Lower Berth"
    } else if ((sn=='53' || sn=='58') && rn=='7') {
        seat = "Middle Berth"
    } else if ((sn=='54' || sn=='59') && rn=='7') {
        seat = "Upper Berth"
    } else if (sn=='56' && rn=='7') {
        seat = "Side Upper Berth"
    } else if (sn=='63' && rn=='7') {
        seat = "Side Lower Berth"
    }

    if ((sn=='60' || sn=='65') && rn=='8') {
        seat = "Lower Berth"
    } else if ((sn=='61' || sn=='66') && rn=='8') {
        seat = "Middle Berth"
    } else if ((sn=='62' || sn=='67') && rn=='8') {
        seat = "Upper Berth"
    } else if (sn=='64' && rn=='8') {
        seat = "Side Upper Berth"
    } else if (sn=='71' && rn=='8') {
        seat = "Side Lower Berth"
    }

    if (sn=='68' && rn=='9') {
        seat = "Lower Berth"
    } else if (sn=='69' && rn=='9') {
        seat = "Middle Berth"
    } else if (sn=='70' && rn=='9') {
        seat = "Upper Berth"
    } else if (sn=='72' && rn=='9') {
        seat = "Side Upper Berth"
    }
    return(("Your seat is: " + seat))
}
console.log(bs(54,7))

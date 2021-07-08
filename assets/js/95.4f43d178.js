(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{701:function(l,c,C){"use strict";C.r(c);var Z=C(0),t=Object(Z.a)({},(function(){var l=this,c=l.$createElement,C=l._self._c||c;return C("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[C("h1",{attrs:{id:"create-the-buy-order-ibc-packet"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#create-the-buy-order-ibc-packet"}},[l._v("#")]),l._v(" Create the Buy Order IBC packet")]),l._v(" "),C("p",[l._v("In this chapter you want to modify the IBC logic to create buy orders on the IBC exchange.\nThe logic is very similar to the previous sell order chapter.")]),l._v(" "),C("h2",{attrs:{id:"modify-the-proto-definition"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-proto-definition"}},[l._v("#")]),l._v(" Modify the Proto Definition")]),l._v(" "),C("p",[l._v("Add the buyer to the proto file definition")]),l._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vaWJjZGV4L3BhY2tldC5wcm90bwptZXNzYWdlIEJ1eU9yZGVyUGFja2V0RGF0YSB7CiAgc3RyaW5nIGFtb3VudERlbm9tID0gMTsKICBpbnQzMiBhbW91bnQgPSAyOwogIHN0cmluZyBwcmljZURlbm9tID0gMzsKICBpbnQzMiBwcmljZSA9IDQ7CiAgc3RyaW5nIGJ1eWVyID0gNTsgLy8gJmx0Oy0tCn0K"}}),l._v(" "),C("h2",{attrs:{id:"about-the-ibc-packet"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#about-the-ibc-packet"}},[l._v("#")]),l._v(" About the IBC Packet")]),l._v(" "),C("p",[l._v("The IBC packet has four different stages you need to consider:")]),l._v(" "),C("ol",[C("li",[l._v("Before transmitting the packet")]),l._v(" "),C("li",[l._v("On Receipt of a packet")]),l._v(" "),C("li",[l._v("On Acknowledgment of a packet")]),l._v(" "),C("li",[l._v("On Timeout of a packet")])]),l._v(" "),C("h3",{attrs:{id:"pre-transmit"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#pre-transmit"}},[l._v("#")]),l._v(" Pre-transmit")]),l._v(" "),C("p",[l._v("Before a sell order will be submitted, make sure it contains the following logic:")]),l._v(" "),C("ul",[C("li",[l._v("Check if the pair exists on the order book")]),l._v(" "),C("li",[l._v("If the token is an IBC token, burn the tokens")]),l._v(" "),C("li",[l._v("If the token is a native token, lock the tokens")]),l._v(" "),C("li",[l._v("Save the voucher received on the target chain to later resolve a denom")])]),l._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL21zZ19zZXJ2ZXJfYnV5T3JkZXIuZ28KaW1wb3J0ICZxdW90O2Vycm9ycyZxdW90OwoKZnVuYyAoayBtc2dTZXJ2ZXIpIFNlbmRCdXlPcmRlcihnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqdHlwZXMuTXNnU2VuZEJ1eU9yZGVyKSAoKnR5cGVzLk1zZ1NlbmRCdXlPcmRlclJlc3BvbnNlLCBlcnJvcikgewoJY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKCS8vIENhbm5vdCBzZW5kIGEgb3JkZXIgaWYgdGhlIHBhaXIgZG9lc24ndCBleGlzdAoJcGFpckluZGV4IDo9IHR5cGVzLk9yZGVyQm9va0luZGV4KG1zZy5Qb3J0LCBtc2cuQ2hhbm5lbElELCBtc2cuQW1vdW50RGVub20sIG1zZy5QcmljZURlbm9tKQoJXywgZm91bmQgOj0gay5HZXRCdXlPcmRlckJvb2soY3R4LCBwYWlySW5kZXgpCglpZiAhZm91bmQgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRCdXlPcmRlclJlc3BvbnNle30sIGVycm9ycy5OZXcoJnF1b3Q7dGhlIHBhaXIgZG9lc24ndCBleGlzdCZxdW90OykKCX0KCgkvLyBMb2NrIHRoZSB0b2tlbiB0byBzZW5kCglzZW5kZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIobXNnLlNlbmRlcikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRCdXlPcmRlclJlc3BvbnNle30sIGVycgoJfQoJCiAgICAvLyBVc2UgU2FmZUJ1cm4gdG8gZW5zdXJlIG5vIG5ldyBuYXRpdmUgdG9rZW5zIGFyZSBtaW50ZWQKCWlmIGVyciA6PSBrLlNhZmVCdXJuKAoJCWN0eCwKCQltc2cuUG9ydCwKCQltc2cuQ2hhbm5lbElELAoJCXNlbmRlciwKCQltc2cuUHJpY2VEZW5vbSwKCQltc2cuQW1vdW50Km1zZy5QcmljZSwKCSk7IGVyciAhPSBuaWwgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRCdXlPcmRlclJlc3BvbnNle30sIGVycgoJfQoKCS8vIFNhdmUgdGhlIHZvdWNoZXIgcmVjZWl2ZWQgb24gdGhlIG90aGVyIGNoYWluLCB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc29sdmUgaXQgaW50byB0aGUgb3JpZ2luYWwgZGVub20KCWsuU2F2ZVZvdWNoZXJEZW5vbShjdHgsIG1zZy5Qb3J0LCBtc2cuQ2hhbm5lbElELCBtc2cuUHJpY2VEZW5vbSkKCgkvLyBDb25zdHJ1Y3QgdGhlIHBhY2tldAoJdmFyIHBhY2tldCB0eXBlcy5CdXlPcmRlclBhY2tldERhdGEKCglwYWNrZXQuQnV5ZXIgPSBtc2cuU2VuZGVyIC8vICZsdDstIE1hbnVhbGx5IHNwZWNpZnkgdGhlIGJ1eWVyIGhlcmUKCXBhY2tldC5BbW91bnREZW5vbSA9IG1zZy5BbW91bnREZW5vbQoJcGFja2V0LkFtb3VudCA9IG1zZy5BbW91bnQKCXBhY2tldC5QcmljZURlbm9tID0gbXNnLlByaWNlRGVub20KCXBhY2tldC5QcmljZSA9IG1zZy5QcmljZQoKCS8vIFRyYW5zbWl0IHRoZSBwYWNrZXQKCWVyciA9IGsuVHJhbnNtaXRCdXlPcmRlclBhY2tldCgKCQljdHgsCgkJcGFja2V0LAoJCW1zZy5Qb3J0LAoJCW1zZy5DaGFubmVsSUQsCgkJY2xpZW50dHlwZXMuWmVyb0hlaWdodCgpLAoJCW1zZy5UaW1lb3V0VGltZXN0YW1wLAoJKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CgoJcmV0dXJuICZhbXA7dHlwZXMuTXNnU2VuZEJ1eU9yZGVyUmVzcG9uc2V7fSwgbmlsCn0K"}}),l._v(" "),C("h2",{attrs:{id:"create-the-onrecv-function"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#create-the-onrecv-function"}},[l._v("#")]),l._v(" Create the OnRecv Function")]),l._v(" "),C("ul",[C("li",[l._v("Update sell order book")]),l._v(" "),C("li",[l._v("Distribute gains to sellers")]),l._v(" "),C("li",[l._v("Send to chain B the buy order after the fill attempt")])]),l._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL2J1eU9yZGVyLmdvCmZ1bmMgKGsgS2VlcGVyKSBPblJlY3ZCdXlPcmRlclBhY2tldChjdHggc2RrLkNvbnRleHQsIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LCBkYXRhIHR5cGVzLkJ1eU9yZGVyUGFja2V0RGF0YSkgKHBhY2tldEFjayB0eXBlcy5CdXlPcmRlclBhY2tldEFjaywgZXJyIGVycm9yKSB7CgkvLyB2YWxpZGF0ZSBwYWNrZXQgZGF0YSB1cG9uIHJlY2VpdmluZwoJaWYgZXJyIDo9IGRhdGEuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gcGFja2V0QWNrLCBlcnIKCX0KCgkvLyBDaGVjayBpZiB0aGUgc2VsbCBvcmRlciBib29rIGV4aXN0cwoJcGFpckluZGV4IDo9IHR5cGVzLk9yZGVyQm9va0luZGV4KHBhY2tldC5Tb3VyY2VQb3J0LCBwYWNrZXQuU291cmNlQ2hhbm5lbCwgZGF0YS5BbW91bnREZW5vbSwgZGF0YS5QcmljZURlbm9tKQoJYm9vaywgZm91bmQgOj0gay5HZXRTZWxsT3JkZXJCb29rKGN0eCwgcGFpckluZGV4KQoJaWYgIWZvdW5kIHsKCQlyZXR1cm4gcGFja2V0QWNrLCBlcnJvcnMuTmV3KCZxdW90O3RoZSBwYWlyIGRvZXNuJ3QgZXhpc3QmcXVvdDspCgl9CgoJLy8gRmlsbCBidXkgb3JkZXIKCXJlbWFpbmluZywgbGlxdWlkYXRlZCwgcHVyY2hhc2UsIF8gOj0gYm9vay5GaWxsQnV5T3JkZXIodHlwZXMuT3JkZXJ7CgkJQW1vdW50OiBkYXRhLkFtb3VudCwKCQlQcmljZTogZGF0YS5QcmljZSwKCX0pCgoJLy8gUmV0dXJuIHJlbWFpbmluZyBhbW91bnQgYW5kIGdhaW5zCglwYWNrZXRBY2suUmVtYWluaW5nQW1vdW50ID0gcmVtYWluaW5nLkFtb3VudAoJcGFja2V0QWNrLlB1cmNoYXNlID0gcHVyY2hhc2UKCgkvLyBCZWZvcmUgZGlzdHJpYnV0aW5nIGdhaW5zLCB3ZSByZXNvbHZlIHRoZSBkZW5vbQoJLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGRlbm9tIHJlY2VpdmVkIGNvbWVzIGZyb20gdGhpcyBjaGFpbiBvcmlnaW5hbGx5CglmaW5hbFByaWNlRGVub20sIHNhdmVkIDo9IGsuT3JpZ2luYWxEZW5vbShjdHgsIHBhY2tldC5EZXN0aW5hdGlvblBvcnQsIHBhY2tldC5EZXN0aW5hdGlvbkNoYW5uZWwsIGRhdGEuUHJpY2VEZW5vbSkKCWlmICFzYXZlZCB7CgkJLy8gSWYgaXQgd2FzIG5vdCBmcm9tIHRoaXMgY2hhaW4gd2UgdXNlIHZvdWNoZXIgYXMgZGVub20KCQlmaW5hbFByaWNlRGVub20gPSBWb3VjaGVyRGVub20ocGFja2V0LlNvdXJjZVBvcnQsIHBhY2tldC5Tb3VyY2VDaGFubmVsLCBkYXRhLlByaWNlRGVub20pCgl9CgoJLy8gRGlzcGF0Y2ggbGlxdWlkYXRlZCBidXkgb3JkZXIKCWZvciBfLCBsaXF1aWRhdGlvbiA6PSByYW5nZSBsaXF1aWRhdGVkIHsKCQlsaXF1aWRhdGlvbiA6PSBsaXF1aWRhdGlvbgoKCQlhZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGxpcXVpZGF0aW9uLkNyZWF0b3IpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBwYWNrZXRBY2ssIGVycgoJCX0KCgkJaWYgZXJyIDo9IGsuU2FmZU1pbnQoCgkJCWN0eCwKCQkJcGFja2V0LkRlc3RpbmF0aW9uUG9ydCwKCQkJcGFja2V0LkRlc3RpbmF0aW9uQ2hhbm5lbCwKCQkJYWRkciwKCQkJZmluYWxQcmljZURlbm9tLAoJCQlsaXF1aWRhdGlvbi5BbW91bnQqbGlxdWlkYXRpb24uUHJpY2UsCgkJKTsgZXJyICE9IG5pbCB7CgkJCXJldHVybiBwYWNrZXRBY2ssIGVycgoJCX0KCX0KCgkvLyBTYXZlIHRoZSBuZXcgb3JkZXIgYm9vawoJay5TZXRTZWxsT3JkZXJCb29rKGN0eCwgYm9vaykKCglyZXR1cm4gcGFja2V0QWNrLCBuaWwKfQo="}}),l._v(" "),C("h2",{attrs:{id:"create-the-onacknowledgement-function"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#create-the-onacknowledgement-function"}},[l._v("#")]),l._v(" Create the OnAcknowledgement Function")]),l._v(" "),C("ul",[C("li",[l._v("Chain "),C("code",[l._v("Mars")]),l._v(" will store the remaining buy order in the buy order book and will distribute sold "),C("code",[l._v("MCX")]),l._v(" to the sellers and will mint the voucher token to the buyer the price of the amount bought")]),l._v(" "),C("li",[l._v("On error we mint back the burned tokens")])]),l._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL2J1eU9yZGVyLmdvCmZ1bmMgKGsgS2VlcGVyKSBPbkFja25vd2xlZGdlbWVudEJ1eU9yZGVyUGFja2V0KGN0eCBzZGsuQ29udGV4dCwgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsIGRhdGEgdHlwZXMuQnV5T3JkZXJQYWNrZXREYXRhLCBhY2sgY2hhbm5lbHR5cGVzLkFja25vd2xlZGdlbWVudCkgZXJyb3IgewoJc3dpdGNoIGRpc3BhdGNoZWRBY2sgOj0gYWNrLlJlc3BvbnNlLih0eXBlKSB7CgljYXNlICpjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50X0Vycm9yOgoJCS8vIEluIGNhc2Ugb2YgZXJyb3Igd2UgbWludCBiYWNrIHRoZSBuYXRpdmUgdG9rZW4KCQlyZWNlaXZlciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihkYXRhLkJ1eWVyKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoKCQlpZiBlcnIgOj0gay5TYWZlTWludCgKCQkJY3R4LAoJCQlwYWNrZXQuU291cmNlUG9ydCwKCQkJcGFja2V0LlNvdXJjZUNoYW5uZWwsCgkJCXJlY2VpdmVyLAoJCQlkYXRhLlByaWNlRGVub20sCgkJCWRhdGEuQW1vdW50KmRhdGEuUHJpY2UsCgkJKTsgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9CgoJCXJldHVybiBuaWwKCWNhc2UgKmNoYW5uZWx0eXBlcy5BY2tub3dsZWRnZW1lbnRfUmVzdWx0OgoJCS8vIERlY29kZSB0aGUgcGFja2V0IGFja25vd2xlZGdtZW50CgkJdmFyIHBhY2tldEFjayB0eXBlcy5CdXlPcmRlclBhY2tldEFjawogICAgICAgIAoJCWlmIGVyciA6PSB0eXBlcy5Nb2R1bGVDZGMuVW5tYXJzaGFsSlNPTihkaXNwYXRjaGVkQWNrLlJlc3VsdCwgJmFtcDtwYWNrZXRBY2spOyBlcnIgIT0gbmlsIHsKCQkJLy8gVGhlIGNvdW50ZXItcGFydHkgbW9kdWxlIGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBjb3JyZWN0IGFja25vd2xlZGdtZW50IGZvcm1hdAoJCQlyZXR1cm4gZXJyb3JzLk5ldygmcXVvdDtjYW5ub3QgdW5tYXJzaGFsIGFja25vd2xlZGdtZW50JnF1b3Q7KQoJCX0KCgkJLy8gR2V0IHRoZSBzZWxsIG9yZGVyIGJvb2sKCQlwYWlySW5kZXggOj0gdHlwZXMuT3JkZXJCb29rSW5kZXgocGFja2V0LlNvdXJjZVBvcnQsIHBhY2tldC5Tb3VyY2VDaGFubmVsLCBkYXRhLkFtb3VudERlbm9tLCBkYXRhLlByaWNlRGVub20pCgkJYm9vaywgZm91bmQgOj0gay5HZXRCdXlPcmRlckJvb2soY3R4LCBwYWlySW5kZXgpCgkJaWYgIWZvdW5kIHsKCQkJcGFuaWMoJnF1b3Q7YnV5IG9yZGVyIGJvb2sgbXVzdCBleGlzdCZxdW90OykKCQl9CgoJCS8vIEFwcGVuZCB0aGUgcmVtYWluaW5nIGFtb3VudCBvZiB0aGUgb3JkZXIKCQlpZiBwYWNrZXRBY2suUmVtYWluaW5nQW1vdW50ICZndDsgMCB7CgkJCV8sIGVyciA6PSBib29rLkFwcGVuZE9yZGVyKAoJCQkJZGF0YS5CdXllciwKCQkJCXBhY2tldEFjay5SZW1haW5pbmdBbW91bnQsCgkJCQlkYXRhLlByaWNlLAoJCQkpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQkvLyBTYXZlIHRoZSBuZXcgb3JkZXIgYm9vawoJCQlrLlNldEJ1eU9yZGVyQm9vayhjdHgsIGJvb2spCgkJfQoKCQkvLyBNaW50IHRoZSBwdXJjaGFzZQoJCWlmIHBhY2tldEFjay5QdXJjaGFzZSAmZ3Q7IDAgewoJCQlyZWNlaXZlciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihkYXRhLkJ1eWVyKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJZmluYWxBbW91bnREZW5vbSwgc2F2ZWQgOj0gay5PcmlnaW5hbERlbm9tKGN0eCwgcGFja2V0LlNvdXJjZVBvcnQsIHBhY2tldC5Tb3VyY2VDaGFubmVsLCBkYXRhLkFtb3VudERlbm9tKQoJCQlpZiAhc2F2ZWQgewoJCQkJLy8gSWYgaXQgd2FzIG5vdCBmcm9tIHRoaXMgY2hhaW4gd2UgdXNlIHZvdWNoZXIgYXMgZGVub20KCQkJCWZpbmFsQW1vdW50RGVub20gPSBWb3VjaGVyRGVub20ocGFja2V0LkRlc3RpbmF0aW9uUG9ydCwgcGFja2V0LkRlc3RpbmF0aW9uQ2hhbm5lbCwgZGF0YS5BbW91bnREZW5vbSkKCQkJfQoJCQlpZiBlcnIgOj0gay5TYWZlTWludCgKCQkJCWN0eCwKCQkJCXBhY2tldC5Tb3VyY2VQb3J0LAoJCQkJcGFja2V0LlNvdXJjZUNoYW5uZWwsCgkJCQlyZWNlaXZlciwKCQkJCWZpbmFsQW1vdW50RGVub20sCgkJCQlwYWNrZXRBY2suUHVyY2hhc2UsCgkJCSk7IGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgkJfQoKCQlyZXR1cm4gbmlsCglkZWZhdWx0OgoJCS8vIFRoZSBjb3VudGVyLXBhcnR5IG1vZHVsZSBkb2Vzbid0IGltcGxlbWVudCB0aGUgY29ycmVjdCBhY2tub3dsZWRnbWVudCBmb3JtYXQKCQlyZXR1cm4gZXJyb3JzLk5ldygmcXVvdDtpbnZhbGlkIGFja25vd2xlZGdtZW50IGZvcm1hdCZxdW90OykKCX0KfQo="}}),l._v(" "),C("h2",{attrs:{id:"create-the-ontimeout-function"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ontimeout-function"}},[l._v("#")]),l._v(" Create the OnTimeout Function")]),l._v(" "),C("p",[l._v("In case the order has a timeout is is necessary to mint back the token for the user.")]),l._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL2J1eU9yZGVyLmdvCmZ1bmMgKGsgS2VlcGVyKSBPblRpbWVvdXRCdXlPcmRlclBhY2tldChjdHggc2RrLkNvbnRleHQsIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LCBkYXRhIHR5cGVzLkJ1eU9yZGVyUGFja2V0RGF0YSkgZXJyb3IgewoJLy8gSW4gY2FzZSBvZiBlcnJvciB3ZSBtaW50IGJhY2sgdGhlIG5hdGl2ZSB0b2tlbgoJcmVjZWl2ZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoZGF0YS5CdXllcikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCglpZiBlcnIgOj0gay5TYWZlTWludCgKCQljdHgsCgkJcGFja2V0LlNvdXJjZVBvcnQsCgkJcGFja2V0LlNvdXJjZUNoYW5uZWwsCgkJcmVjZWl2ZXIsCgkJZGF0YS5QcmljZURlbm9tLAoJCWRhdGEuQW1vdW50KmRhdGEuUHJpY2UsCgkpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJcmV0dXJuIG5pbAp9Cg=="}})],1)}),[],!1,null,null,null);c.default=t.exports}}]);
// JavaScript Document

var linkSkills = [
	["Co", [
			["新生夏組", 6, 7, 8, 9, 10]
		],
		[
			["甘党", 7, 12, 18, 20]
		],
		[
			["トラブルメーカーズ", 5, 9, 19],
			["少女漫画同好会", 7, 10, 15],
			["フリーター", 9, 16, 20]
		],
		[
			["目指せ漫才の星", 3, 5],
			["団内文芸部", 3, 19],
			["魚卵嫌い", 4, 19],
			["ショッピング仲間", 6, 11],
			["聖フローラ中学組", 7, 8],
			["団内手芸部", 8, 14],
			["ワンワンコンビ", 10, 13],
			["芸術家肌", 10, 19]
		]
	],
	["Ac", [
			["新生秋組", 11, 12, 13, 14, 15]
		],
		[
			["リーダーズ", 1, 6, 11, 16]
		],
		[
			["団内サッカー部", 3, 14, 17],
			["歌舞伎好き", 5, 8, 17],
			["欧華高校組", 6, 12, 13]
		],
		[
			["ひたむきボーイズ", 1, 12],
			["両親が海外", 2, 6],
			["毒舌", 2, 8],
			["ゲーマー部", 4, 11],
			["ジャンクフーダー", 4, 13],
			["運動神経おばけ", 9, 18],
			["おさななじみ", 16, 17]
		]
	],
	["Sr", [
			["新生春組", 1, 2, 3, 4, 5],
			["新生冬組", 16, 17, 18, 19, 20]
		],
		[
			["団内麻雀部", 5, 10, 15, 20]
		],
		[
			["花咲高校組", 1, 2, 11],
			["天涯孤独", 1, 18, 20]
		],
		[
			["寝る子は育つ", 2, 18],
			["葉星大学組", 3, 14],
			["教え上手", 4, 16],
			["いとこ同士", 7, 12],
			["Gの洗礼", 13, 17],
			["元ヤン", 14, 15],
			["最年長組・・・？", 15, 20]
		]
	],
];

var degree1 = [
	"大アップ（＋５０％）",
	"中アップ（＋４０％）",
	"小アップ（＋３０％）",
	"並アップ（＋１０％）"
];

var member = [
	"咲也",
	"真澄",
	"綴",
	"至",
	"シトロン",
	"天馬",
	"椋",
	"幸",
	"三角",
	"一成",
	"万里",
	"十座",
	"太一",
	"臣",
	"左京",
	"紬",
	"丞",
	"密",
	"誉",
	"東"
];

function indicate() {
	//セレクターの中身を取得（Co=0,Ac=1,Sr=2）
	var y = "";
	var input = document.form1.type1.selectedIndex;

	//セレクターで選択されたタイプのリストをlinkSkillsから反映する
	y = y + "<table border=\"1\" width=\"500\" cellspacing=\"0\" cellpadding=\"5\" bordercolor=\"silver\"<tr><th colspan=\"6\" align=\"left\" class=\"" + linkSkills[input][0] + "\">" + linkSkills[input][0] + "</th></tr>";
	for (var j = 1; j < linkSkills[input].length; j = j + 1) {
		y = y + "<tr><td colspan=\"6\" bgcolor=\"#CCCCCC\" align=\"left\">" + degree1[j - 1] + "</td></tr><tr>";
		for (var k = 0; k < linkSkills[input][j].length; k++) {
			for (var l = 0; l < linkSkills[input][j][k].length; l++) {
				if (!isNaN(linkSkills[input][j][k][l])) {
					y = y + "<td><img width=\"50\" height=\"50\" src=\"A3/member_" + linkSkills[input][j][k][l] + ".jpg\"></img><br><a>" + member[linkSkills[input][j][k][l] -1] + "</a></td>";
				} else {
					y = y + "<td class=\"skillName\">" + linkSkills[input][j][k][l] + "</td>";
				}
			}
			y = y + "</tr>";
		}
	}
	y = y + "</table>";
	document.getElementById("table1").innerHTML = y;
}

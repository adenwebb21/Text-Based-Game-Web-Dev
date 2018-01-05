var examinedStable = false;
var guntherSentYou = false;
var hasNecklace = false;
var hasTranslator = false;

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById('roomChoices').innerHTML = "";
	document.getElementById('lockedRoomChoices').innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	document.getElementById('discoveryText').innerHTML = "";

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var roomChoices = "<button id = 'button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button><br\>";
		document.getElementById('roomChoices').innerHTML += roomChoices;
	}

	UpdateInfo(roomIndex);
	CreateLockedButtons(roomIndex)
	GetBackgroundImage(roomIndex);
}

function GetLockedButtons(roomIndex)
{
	document.getElementById('lockedRoomChoices').innerHTML = "";

	for (var i = 0; i < lockedChoicesArray[roomIndex].choices.length; i++)
	{
		var lockedRoomChoices = "<button id = 'lockedButton' onClick=SelectRoom(" + lockedChoicesArray[roomIndex].choices[i].index + ")>" + lockedChoicesArray[roomIndex].choices[i].text + "</button><br\>";
		document.getElementById('lockedRoomChoices').innerHTML += lockedRoomChoices;
	}
}

function GetBackgroundImage(roomIndex)
{
	switch (roomIndex)
	{
		case 0:
		case 1:
		case 2:
			document.getElementById("body").background = "farmbg.png";
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			document.getElementById("body").background = "stable.png";
			break;
		case 8:
		case 9:
		case 10:
		case 11:
			document.getElementById("body").background = "barraks.png";
			break;
		default:
			document.getElementById("body").background = "";
			break;
	}
}

function CreateLockedButtons(roomIndex)
{
	switch (roomIndex)
	{
		case 6:
			if (examinedStable == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 14:
			if (guntherSentYou == true)
			{
				GetLockedButtons(roomIndex);
			}
		default:
			break;
	}
}

function UpdateInfo(roomIndex)
{
	switch (roomIndex)
	{
		case 5:
			examinedStable = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned that the stable is well looked after - maybe you can use this to make the stable boy feel more comfortable";
			break;
		case 11:
			guntherSentYou = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned that Mera could be made more amenable by telling her that Gunther sent you";
			break;
		case 16:
			hasNecklace = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have retrieved the necklace from the hands of the gem trader.";
			break;
		case 17:
			hasTranslator = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have been granted a translator that will allow you to converse with the spirit.";
			break;
		default:
			break;
	}
}

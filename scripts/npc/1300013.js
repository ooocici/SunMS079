/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 *//*新副本？*/
 function start() {
    cm.sendSimple("#b\r\n#L0#挑战三色雪人#l\r\n#L1#拯救碧欧蕾塔#l#k");
}

function action(mode,type,selection) {
    if (mode == 1) { //or 931000400 + selection..?
	switch(selection) {
	    case 0:
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("组队队长必须在这里 .");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size >= 3)) {
	    	    for(var i = 0; i < 10; i++) {
			if (cm.getMap(106021500 + i).getCharactersSize() == 0) {
		    		cm.warpParty(106021500 + i);
				cm.dispose();
		    		return;
			}
	    	    }
			cm.sendOk("另一个队伍已经在里面挑战了.");
		} else {
			cm.sendOk("需要队伍成员总共三个，你的组队的成员必须全部在这里.");
		}
	    }
		break;
	    case 1:
		cm.warp(106021401,0);
		break;
	}
    }
    cm.dispose();
}
/* ==================
 脚本类型: NPC	    
 脚本版权：一线海冒险岛团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("你想听到的回?");
    } else if (status == 1) {
	cm.warp(193000000);
	cm.dispose();
    }
}

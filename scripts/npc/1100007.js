/* ==================
 �ű�����: NPC	    
 �ű���Ȩ��һ�ߺ�ð�յ��Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
function start() {
    cm.sendYesNo("����ҪȥҮ�׷����֧��#b 500 ���#k ���Ǳ�Լһ����.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("���㿼�Ǻ��������Ұ�!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 500) {
	cm.gainMeso(-500);
	cm.warpBack(200090020,130000210,80);
    }
    cm.dispose();
}
}
/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){status++;if(1!=a)if(1==b&&0==a)status-=2;else{qm.sendNext("\u55ef\uff1f\u5e72\u561b\uff1f\u4f60\u4e0d\u60f3\u5403\u65e9\u996d\u4e86\u5417\uff1f\u4e0d\u5403\u4e1c\u897f\u53ef\u4e0d\u597d\u3002\u5982\u679c\u4f60\u60f3\u5403\u996d\u7684\u8bdd\uff0c\u5c31\u518d\u6765\u627e\u6211\u3002\u4e0d\u5feb\u70b9\u8bf4\u7684\u8bdd\uff0c\u5c31\u8981\u88ab\u6211\u5403\u6389\u4e86\u554a\uff1f");qm.dispose();return}0==status?qm.sendNext("\u7ed9#p1013102#\u5582\u8fc7\u996d\u4e86\u5417\uff1f\u5c0f\u4e0d\u70b9\u4f60\u53bb\u5403\u65e9\u996d\u5427\u3002\u4eca\u5929\u7684\u65e9\u996d\u662f#t2022620#\u3002\u6211\u62ff\u51fa\u6765\u4e86\uff0c\u563b\u563b\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5982\u679c\u4f60\u4e0d\u53bb\u7ed9#p1013102#\u5582\u98df\uff0c\u6211\u5c31\u4e0d\u6253\u7b97\u7ed9\u4f60\u65e9\u996d\u5403\u3002"):1==status?qm.sendAcceptDecline("\u6765\uff0c\u7ed9\u4f60#b\u4e09\u660e\u6cbb\uff0c\u5403\u5b8c\u4e4b\u540e\u5230\u5988\u5988\u90a3\u91cc\u53bb\u4e00\u8d9f\u3002#k\u5979\u597d\u8c61\u6709\u8bdd\u8981\u8ddf\u4f60\u8bf4\u3002"):2==status?(qm.forceStartQuest(),qm.PlayerToNpc("#b(\u6709\u8bdd\u8981\u8ddf\u6211\u8bf4\uff1f\u5148\u628a#t2022620#\u5403\u4e86\uff0c\u7136\u540e\u5230\u5c4b\u91cc\u53bb\u770b\u770b\u5427\u3002)#k"),qm.gainItem(2022620,1)):3==status&&(qm.evanTutorial("UI/tutorial/evan/3/0",1),qm.dispose())}function end(a,b,c){status++;if(1!=a)if(1==b&&0==a)status-=2;else{qm.dispose();return}0==status?qm.sendNext("\u65e9\u996d\u5403\u4e86\u5417\uff0c\u5c0f\u4e0d\u70b9\uff1f\u4f60\u80fd\u5e2e\u5988\u5988\u505a\u4ef6\u4e8b\u5417\uff1f\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1003028# #t1003028# 1\u4e2a  \r\n#i2022621# #t2022621# 5\u4e2a \r\n#i2022622# #t2022622# 5\u4e2a \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp"):1==status&&(qm.forceCompleteQuest(),qm.evanTutorial("UI/tutorial/evan/4/0",1),qm.gainItem(1003028,1),qm.gainItem(2022621,5),qm.gainItem(2022622,5),qm.gainExp(60),qm.dispose())};
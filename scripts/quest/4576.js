/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){-1==a?qm.dispose():(1==a?status++:status--,0==status?1==qm.getPlayer().getBossLog("mhuan")?(qm.sendOk("\u4f60\u5df2\u7ecf\u5df2\u7ecf\u5b8c\u6210\u4efb\u52a1\u4e86\u5594,\u8bf7\u660e\u5929\u518d\u6765\u5427"),qm.dispose()):qm.sendNext("\u60f3\u627e\u4e2a\u523a\u6fc0\u53c8\u597d\u73a9\u7684\u5730\u65b9\u5417?\u68a6\u5e7b\u4e3b\u9898\u516c\u56ed\u5c06\u4f1a\u662f\u4f60\u7b2c\u4e00\u9996\u9009.\u4f46,\u6700\u8fd1\u68a6\u5e7b\u4e3b\u9898\u516c\u56ed\u8fd8\u6709\u70b9\u5371\u9669.\u4f60\u77e5\u9053\u600e\u4e48\u4e86\u5417?"):1==status?qm.sendNext("\u6211\u7684\u597d\u53cb,#b\u827e\u5c14\u591a\u9c81#k\u544a\u8bc9\u6211\u5728\u68a6\u5e7b\u4e3b\u9898\u516c\u56ed\u6b63\u88ab\u4e00\u7fa4\u602a\u7269\u56f4\u653b,\u800c\u5979\u662f\u552f\u4e00\u4e00\u4eba\u6b63\u5728\u5904\u7406\u6b64\u4e8b,\u4f46\u8fd9\u7fa4\u602a\u7269\u4e00\u5929\u6bd4\u4e00\u5929\u5f3a\u5927,\u5979\u975e\u5e38\u9700\u8981\u4ed6\u4eba\u7684\u5e2e\u52a9."):2==status?qm.sendAcceptDecline("\u4f60\u80fd\u52a9\u5979\u4e00\u81c2\u4e4b\u529b\u4fdd\u6301\u68a6\u5e7b\u4e3b\u9898\u516c\u56ed\u7684\u5b89\u5168\u5417?"):3==status&&(qm.gainItem(4032246,2),qm.getPlayer().setBossLog("mhuan"),qm.completeQuest(),qm.sendOk("\u592a\u597d\u4e86!\u6211\u73b0\u5728\u4e0d\u80fd\u79bb\u5f00\u7518\u699c\u6751,#b\u827e\u5c14\u591a\u9c81#k\u77e5\u9053\u6709\u5173\u5728\u68a6\u5e7b\u4e3b\u9898\u516c\u56ed\u4e24\u53ea\u602a\u7269\u7684\u8be6\u60c5,\u8bf7\u53bb\u627e#b\u827e\u5c14\u591a\u9c81#k\u5427,\u5979\u4f1a\u6559\u4f60\u4e0b\u4e00\u6b65\u8be5\u600e\u4e48\u505a."),qm.dispose()))};
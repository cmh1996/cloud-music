import {songListChinese,
		songListFolk,
		songListElectronic,
		user,
		trendList,
		createdSongList,
		collectSongList} from '../data.js'

export default {
	isLoading: false,
	
	recommendSongIndex :0,
	exclusiveIndex :1,
	latestSongIndex :2,
	recommendMVIndex :3,
	specialColumnIndex :4,
	publicFMIndex :5,

	currentSongList : null,
	songList :{
		songListChinese,
		songListFolk,
		songListElectronic,
	},
	user,

	setShow: false,

	trendList,

	createdSongList,
	collectSongList,
};

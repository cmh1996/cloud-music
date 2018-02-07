export default {
 SET_LOADING(state,platform){
 	state.isLoading = platform;
 },
 SET_RECOMMENDSONGINDEX(state,platform){
 	state.recommendSongIndex = platform;
 },
 SET_EXCLUSIVEINDEX(state,platform){
 	state.exclusiveIndex = platform;
 },
 SET_LATESTSONGINDEX(state,platform){
 	state.latestSongIndex = platform;
 },
 SET_RECOMMENDMVINDEX(state,platform){
 	state.recommendMVIndex = platform;
 },
 SET_SPECIALCOLUMNINDEX(state,platform){
 	state.specialColumnIndex = platform;
 },
 SET_PUBLICFMINDEX(state,platform){
 	state.publicFMIndex = platform;
 },
 SET_CURRENTSONGLIST(state,type){
 	let tname = 'songList'+type;
 	state.currentSongList = state.songList[tname];
 },
 SET_MORE(state,platform){
 	state.currentSongList = platform;
 },
  SET_SIGN(state,platform){
 	state.user.isSigned = platform;
 },
  SET_SETSHOW(state,platform){
 	state.setShow = platform;
 },
 SET_FOLLOW(state,platform){
 	state.trendList[platform].followed = true;
 },
};

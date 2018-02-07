export default {
	setLoading ({commit},platform) {
		commit('SET_LOADING',platform);
	},
 	setRecommendSongIndex ({commit},platform) {
 		commit('SET_RECOMMENDSONGINDEX', platform);
 	},
 	setExclusiveIndex ({commit},platform) {
 		commit('SET_EXCLUSIVEINDEX', platform);
 	},
 	setLatestSongIndex ({commit},platform) {
 		commit('SET_LATESTSONGINDEX', platform);
 	},
 	setRecommendMVIndex ({commit},platform) {
 		commit('SET_RECOMMENDMVINDEX', platform);
 	},
 	setSpecialColumnIndex ({commit},platform) {
 		commit('SET_SPECIALCOLUMNINDEX', platform);
 	},
 	setPublicFMIndex ({commit},platform) {
 		commit('SET_PUBLICFMINDEX', platform);
 	},
 	setCurrentSongList ({commit},type) {
 		commit('SET_CURRENTSONGLIST', type);
 	},
 	setMore ({commit},platform) {
 		commit('SET_MORE', platform);
 	},
 	setSign ({commit},platform) {
 		commit('SET_SIGN', platform);
 	},
 	setSetShow ({commit},platform) {
 		commit('SET_SETSHOW', platform);
 	},
 	setFollow ({commit},platform) {
 		commit('SET_FOLLOW', platform);
 	},
};

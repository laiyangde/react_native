import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import RankList from './rankList'
import {styles as styles0,size,pixel} from '../util'

var data = {
	'recommend':{
		'url':'http://filedl.gao7.com/g1/M00/42/28/CikzRVSFAG6AWFQwAAKgaoP25uc513.jpg',
		'icon':'http://a3.mzstatic.com/us/r30/Purple69/v4/b5/1c/e5/b51ce5ac-e819-7084-ddff-9bfc3408efa6/CRV_AP_360x216.jpeg',
		'productName':'少年三国志',
		'des':'7天送赵云，两周送红将！周年狂送礼！'
	},
	'rank':[{
		'productName':'体育赌场老虎机游戏',
		'icon':'http://a4.mzstatic.com/us/r30/Purple5/v4/10/e1/f1/10e1f173-bf82-98a8-53df-a29a655d0c2c/icon180x180.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':1,
		'des':'准备好一些大的和令人兴奋的老虎机行动，所有您最喜爱的运动！开始旋转，并赢得在这个有趣的老虎机赌场游戏在您的iPhone或iPad插槽！',
		'downloadUrl':'http://www.gao7.com'
		},{
		'productName':'王者荣耀',
		'icon':'http://a2.mzstatic.com/us/r30/Purple30/v4/36/81/db/3681db5a-d43a-0d53-6167-0cf248e9a396/icon192x192.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':0,
		'des':'腾讯第一5V5英雄公平对战手游',
		'downloadUrl':'http://www.gao7.com'
		},{
		'productName':'球球大作战',
		'icon':'http://a4.mzstatic.com/us/r30/Purple49/v4/ce/4f/93/ce4f93c7-b8e7-c621-0b5c-d4167cf1e41f/icon192x192.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':1,
		'des':'全球玩家,实时对战',
		'downloadUrl':'http://www.gao7.com'
		},{
		'productName':'体育赌场老虎机游戏',
		'icon':'http://a4.mzstatic.com/us/r30/Purple5/v4/10/e1/f1/10e1f173-bf82-98a8-53df-a29a655d0c2c/icon180x180.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':1,
		'des':'准备好一些大的和令人兴奋的老虎机行动，所有您最喜爱的运动！开始旋转，并赢得在这个有趣的老虎机赌场游戏在您的iPhone或iPad插槽！',
		'downloadUrl':'http://www.gao7.com'
		},{
		'productName':'王者荣耀',
		'icon':'http://a2.mzstatic.com/us/r30/Purple30/v4/36/81/db/3681db5a-d43a-0d53-6167-0cf248e9a396/icon192x192.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':1,
		'des':'腾讯第一5V5英雄公平对战手游',
		'downloadUrl':'http://www.gao7.com'
		},{
		'productName':'球球大作战',
		'icon':'http://a4.mzstatic.com/us/r30/Purple49/v4/ce/4f/93/ce4f93c7-b8e7-c621-0b5c-d4167cf1e41f/icon192x192.jpeg',
		'productType':'游戏',
		'size':'24.36 MB',
		'hasGifts':1,
		'des':'全球玩家,实时对战',
		'downloadUrl':'http://www.gao7.com'
		}
	]
}


export default class Hot extends Component {  	
    render() {
        return (
            <View style={styles.container}>
				<ScrollView>
					<View style={styles.topHot}>
						<Image
							style={styles.topImg}
							source={{uri:data.recommend.url}}
						/>					
						<View style={styles.topInfo}>						
							<View style={styles.topText}>
								<Text style={styles.topName}>{data.recommend.productName}</Text>
								<Text numberOfLines={1}>{data.recommend.des}</Text>
							</View>
							<TouchableOpacity style={styles.topDownload}>
								<Text style={styles.topDownloadText}>马上安装</Text>
							</TouchableOpacity>
						</View>
						<Image
							style={styles.topIcon}
							source={{uri:data.recommend.icon}}
						/>
					</View>
					<View style={styles.rankTitleWrap}>
						<View style={styles.rankTitle}>
							<Text style={styles.rankTitleText}>热门手游排行榜</Text>
						</View>
					</View>
					<RankList datas={data.rank}/>
				</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eee',
  },
  
  /**头部推荐 */
  topHot:{
	  backgroundColor:'#fff',
	  marginBottom:size(20),
  },
  topImg:{
	  height:size(220),
  },
  topInfo:{
	  height:size(106),
	  backgroundColor:'#fff',
	  flexDirection:'row',
	  alignItems:'center',
  },
  topIcon:{
	  width:size(100),
	  height:size(100),
	  position:'absolute',
	  left:size(20),
	  bottom:size(20),
	  borderRadius:size(10),
  },
  topText:{	  
	  marginLeft:size(140),
	  flex:1,
  },
  topName:{
	  fontSize:size(28),
	  color:'#000',
  },
  topDownload:{
	  height:size(48),
	  borderWidth:pixel*2,
	  borderColor:'#eb4243',
	  justifyContent:'center',
	  borderRadius:size(5),
	  paddingHorizontal:size(10),
	  marginRight:size(20),
  },
  topDownloadText:{
	  fontSize:size(24),
	  color:'#eb4243'
  },
  
  /**排行榜 */
  rankTitleWrap:{
	  height:size(84),
	  justifyContent:'center',
	  backgroundColor:'#fff',
	  borderBottomColor:'#ddd',
	  borderBottomWidth:pixel,
  },
  rankTitle:{
	  height:size(30),
	  marginLeft:size(20),
	  borderLeftWidth:size(6),
	  borderLeftColor:'#eb4243',	
	  justifyContent:'center',  
  },
  rankTitleText:{
	  marginLeft:size(16),
	  fontSize:size(30),
	  color:'#000',
  },
});



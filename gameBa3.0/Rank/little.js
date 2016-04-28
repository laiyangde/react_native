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
import Recommend from '../Home/recommend'
import {styles as styles0,size,pixel} from '../util'

var data = {
	'recommend':{
		'title':'让你心动的小游戏',
		'player':25647,
		'appArray':[{  
			"ProductId": 0,
			"icon": "http://filelx.gao7.com/g1/M00/DD/0D/CilEmlcNqCuAATfcAABfmAkv7eU431.png",
			"productName": "大话西游"
			},{
			"ProductId": 1,
			"icon": "http://filedl.gao7.com/g1/M00/DD/0E/CilEmlcNqKGALWUCAABIxVxkoS4085.jpg",
			"productName": "梦幻西游"
			},{
			"ProductId": 2,
			"icon": "http://file.gao7.com/g1/M00/DE/E4/CilEmVcNqQ-AcO-PAABKl4MZuq4685.jpg",
			"productName": "部落冲突"
			},{
			"ProductId": 3,
			"icon": "http://filelx.gao7.com/g1/M00/DD/0D/CilEmlcNqCuAATfcAABfmAkv7eU431.png",
			"productName": "大话西游"
			}],
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


export default class Ol extends Component {  	
    render() {
        return (
            <View style={styles.container}>
				<ScrollView>	
					<View style={{marginTop:-size(30),marginBottom:size(20)}}>
						<Recommend datas={data.recommend} />
					</View>					
					<View style={styles.rankTitleWrap}>
						<View style={styles.rankTitle}>
							<Text style={styles.rankTitleText}>小游戏排行榜</Text>
						</View>
					</View>					
					<RankList datas={data.rank} />
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



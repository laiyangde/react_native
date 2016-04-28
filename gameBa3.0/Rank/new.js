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
	'recommend':[{
		"productId": 0,
		"icon": "http://filelx.gao7.com/g1/M00/DD/0D/CilEmlcNqCuAATfcAABfmAkv7eU431.png",
		"productName": "大话西游"
		},{
		"productId": 0,
		"icon": "http://filedl.gao7.com/g1/M00/DD/0E/CilEmlcNqKGALWUCAABIxVxkoS4085.jpg",
		"productName": "梦幻西游"
		},{
		"productId": 0,
		"icon": "http://file.gao7.com/g1/M00/DE/E4/CilEmVcNqQ-AcO-PAABKl4MZuq4685.jpg",
		"productName": "部落冲突"
		},{
		"productId": 0,
		"icon": "http://filelx.gao7.com/g1/M00/DD/0D/CilEmlcNqCuAATfcAABfmAkv7eU431.png",
		"productName": "大话西游"
		}],
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


export default class New extends Component {  	
    render() {
        return (
            <View style={styles.container}>
				<ScrollView>					
					<View style={[styles.rankTitleWrap,{borderBottomWidth:0}]}>
						<View style={styles.rankTitle}>
							<Text style={styles.rankTitleText}>火爆新游</Text>
						</View>
					</View>
					<View style={styles.topHot}>
						<View style={[styles.newItemWrap,styles.borderBottom]}>
							<View style={styles.newItem}>
								<Image
									style={styles.newItemIcon}
									source={{uri:data.recommend[0].icon}}
								/>
								<View style={styles.newItemInfo}>
									<Text style={styles.newItemName} numberOfLines={1}>{data.recommend[0].productName}</Text>
									<TouchableOpacity style={styles.newItemDownload}>
										<Text style={styles.newItemDownloadText}>下载</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.newItem}>
								<Image
									style={styles.newItemIcon}
									source={{uri:data.recommend[1].icon}}
								/>
								<View style={styles.newItemInfo}>
									<Text style={styles.newItemName} numberOfLines={1}>{data.recommend[1].productName}</Text>
									<TouchableOpacity style={styles.newItemDownload}>
										<Text style={styles.newItemDownloadText}>下载</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={[styles.newItemWrap]}>
							<View style={styles.newItem}>
								<Image
									style={styles.newItemIcon}
									source={{uri:data.recommend[2].icon}}
								/>
								<View style={styles.newItemInfo}>
									<Text style={styles.newItemName} numberOfLines={1}>{data.recommend[2].productName}</Text>
									<TouchableOpacity style={styles.newItemDownload}>
										<Text style={styles.newItemDownloadText}>下载</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.newItem}>
								<Image
									style={styles.newItemIcon}
									source={{uri:data.recommend[3].icon}}
								/>
								<View style={styles.newItemInfo}>
									<Text style={styles.newItemName} numberOfLines={1}>{data.recommend[3].productName}</Text>
									<TouchableOpacity style={styles.newItemDownload}>
										<Text style={styles.newItemDownloadText}>下载</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.rankTitleWrap}>
						<View style={styles.rankTitle}>
							<Text style={styles.rankTitleText}>新游排行榜</Text>
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
	  paddingHorizontal:size(20),
	  marginTop:-size(20),
  },
  borderBottom:{
	 borderBottomColor:'#ddd',
	 borderBottomWidth:pixel, 
  },  
  newItemWrap:{
	  height:size(150),
	  paddingVertical:size(30),
	  flexDirection:'row',
  },
  newItem:{
	  flex:1,
	  flexDirection:'row',
  },
  newItemIcon:{
	  height:size(90),
	  width:size(90),
	  marginRight:size(20),
  },
  newItemInfo:{
	  flex:1,
	  marginRight:size(20),
  },
  newItemName:{
	  fontSize:size(28),
	  color:'#000',
  },
  newItemDownload:{
	  height:size(40),
	  width:size(116),
	  borderRadius:size(3),
	  borderWidth:size(2),
	  borderColor:'#eb4243',
	  justifyContent:'center',
	  alignItems:'center',
	  marginTop:size(10),
  },
  newItemDownloadText:{
	  fontSize:size(24),
	  color:'#eb4243',
	  
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



import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  // console.log("hello react native")
  // alert("hello")
  return (
    <>
      <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
        
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color:'blue'
        }
      }>
          Hello World

        </Text>
      </View>
    </>
  )
}

export default Home
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Header, Avatar, ListItem, Chip } from 'react-native-elements'

export default function App() {

  const url = 'https://reqres.in/api/users?per_page=12'
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(result => {
      setUsers(result.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Header style={styles.header}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'CONTACTS', style: { color: '#fff' } }}
    />
    <ScrollView>
      {
        users.map((user, i) => {
          const avatar = user.avatar
          const name = `${user.first_name} ${user.last_name}`
          const email = user.email
            
          return (
            <ListItem key={i}>
              <Avatar
                size="large"
                title={name[0]}
                source={{ uri: avatar }}
              />
              <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>{email}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron/>
            </ListItem>
          );
        })
      }
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

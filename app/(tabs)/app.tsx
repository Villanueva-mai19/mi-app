import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

const AVATAR: ImageSourcePropType = { uri: 'https://i.pravatar.cc/150?img=12' };

export default function App(_props: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image source={AVATAR} style={styles.avatar} />
        </View>

        {/* Nombre */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Michael Pulido</Text>
          <Text style={styles.job}>Desarrollador Mobile</Text>
        </View>

        {/* Info de contacto */}
        <View style={styles.contactCard}>
          <View style={styles.row}>
            <Text style={styles.icon}>📧</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>villanuevamai2006@gmail.com</Text>
            </View>
          </View>

          <View style={[styles.row, styles.mb4]}>
            <Text style={styles.icon}>📱</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>Teléfono</Text>
              <Text style={styles.value}>+57 324 345 3171  </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>📍</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>Ubicación</Text>
              <Text style={styles.value}>Bogotá, Colombia</Text>
            </View>
          </View>
        </View>

        {/* Sobre mí */}
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Sobre Mí</Text>
          <Text style={styles.aboutText}>
            Soy un desarrollador apasionado por crear aplicaciones móviles. Me
            encanta aprender nuevas tecnologías y compartir conocimiento.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  scroll: { paddingBottom: 20, backgroundColor: '#ffffff' },
  header: {
    backgroundColor: '#2563eb', // bg-blue-600
    height: 160,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  headerTitle: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
  avatarContainer: { alignItems: 'center', marginTop: -64 },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  nameContainer: { alignItems: 'center', marginTop: 16, paddingHorizontal: 20 },
  name: { fontSize: 28, fontWeight: '700', color: '#111827' },
  job: { fontSize: 16, color: '#4b5563', marginTop: 4 },
  contactCard: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 0 },
  mb4: { marginBottom: 16 },
  icon: { fontSize: 20, marginRight: 12 },
  flex1: { flex: 1 },
  label: { fontSize: 12, color: '#6b7280' },
  value: { fontSize: 16, color: '#111827', fontWeight: '500' },
  aboutCard: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  aboutTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 8 },
  aboutText: { fontSize: 14, color: '#4b5563', lineHeight: 22 },
});
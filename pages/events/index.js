import Layout from '../../components/Layout'
import {API_URL} from '../../config/index'
import EventItem from '../../components/EventItem'

export default function EventsPage({events}) {
  // console.log(events);
  return (
    <Layout>
      <h2>Events</h2>
      {events.length === 0 && <h3>No Events to show </h3> }
      {events.map(evt => (
        <EventItem
          key={evt.id}
          evt={evt}
        />
      ))}
      
    </Layout>
  )
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  // console.log(events)
  
  return {
    props: {events},
    revalidate: 1,
  }
}
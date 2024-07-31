import { clients } from '../constants'

const Clients = () => (
  <section className="flex-center my-4">
    <div className="flex-center flex-wrap w-full">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex-1 flex-center sm:min:w:[192p] min-w-[100px]"
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients

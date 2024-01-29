'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function ContactMe() {
  return (

    <form
      className="max-w-lg mx-auto"
      action="mailto:ldlizcano@uninorte.edu.co"
      target="_blank"
    // onSubmit={() => window.open(
    //   'about:blank', 'print_popup', 'width=1000,height=800',
    // )}
    // method="post"
    // encType="text/plain"
    >
      {/* <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white/80">Tu nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white/80">Email</label>
        <input
          type="email"
          id="email"
          name="mail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@example.ex"
          required
        />
      </div> */}
      <div className="mb-5">
        <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white/80">Asunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={// TODO: Escribe un Ejemplo de asunto
            'Ejemplo de asunto'
          }
          required
        />
      </div>
      <textarea
        id="message"
        name="comment"
        rows={10}
        className="block p-2.5 w-full text-sm md:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        placeholder="Escribe detalles..."
      />
      {/* <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div> */}
      <div className="flex items-center gap-2">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <span className="text-sm text-white/50">ldlizcano@uninorte.edu.co</span>
      </div>
    </form>
  );
}

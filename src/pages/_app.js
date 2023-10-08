import MainLayout from "@/Modules/Layouts/MainLayout";
import { store } from "@/Libraries/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={true}
        draggable={false}
        pauseOnHover
        rtl
        icon={false}
        theme="dark"
      />
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

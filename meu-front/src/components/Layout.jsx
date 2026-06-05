import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f6f9",
          marginLeft: "250px",
          padding: "40px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
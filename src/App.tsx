import NotificationProvider from "@providers/NotificationProvider";
import AppProvider from "./providers/AppProvider";
import AppRoutes from "./routes/AppRoutes";
import UserProvider from "@providers/UserProvider";

function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </NotificationProvider>
    </AppProvider>
  );
}

export default App;

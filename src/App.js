import { Router } from './router';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
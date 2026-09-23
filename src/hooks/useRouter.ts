import { useEffect, useState } from 'react';

export type Route = 'home' | 'login';

function getRoute(): Route {
  const hash = window.location.hash.slice(1);
  if (hash === '/login') return 'login';
  return 'home';
}

export function navigate(route: Route) {
  if (route === 'login') {
    window.location.hash = '/login';
  } else {
    window.location.hash = '';
  }
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

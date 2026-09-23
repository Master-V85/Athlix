import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

/** Catches render errors so the page doesn't go blank. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Athlix render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-surface-0 px-5 text-center">
          <div className="max-w-md">
            <h1 className="font-display text-2xl font-bold text-white">Something went wrong.</h1>
            <p className="mt-3 text-sm text-white/50">
              The page encountered an error. Please refresh to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-bold text-surface-0 transition-all hover:bg-accent-200"
            >
              Refresh Page
            </button>
            {this.state.error && (
              <pre className="mt-6 overflow-auto rounded-lg bg-surface-100/50 p-4 text-left text-xs text-white/40">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

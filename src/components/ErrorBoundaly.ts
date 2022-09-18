import React from 'react'

type Props = {
  children: React.ReactElement
  fallback: React.ReactElement
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
  // TODO: エラーのトラッキング
  // logErrorToMyService(error, errorInfo)
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}

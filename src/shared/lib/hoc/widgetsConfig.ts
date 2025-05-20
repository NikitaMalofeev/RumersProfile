import React from 'react'
export interface WidgetConfig {
    id: string
    Component: React.FC<any>
    props?: any
}

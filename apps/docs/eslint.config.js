import tseslint from 'typescript-eslint'
import { reactConfig } from 'eslint-config/react.js'

export default tseslint.config(
    ...reactConfig,
)

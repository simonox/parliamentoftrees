# Security Policy

## ⚠️ Disclaimer: Not Secure for Production

This project is intended for development, demonstration, or educational purposes only. It is **not secure for production use**.

### Known Security Issues
- Multiple dependencies (including Vite, cross-spawn, nanoid, esbuild, @babel/helpers, @eslint/plugin-kit, brace-expansion) have known vulnerabilities such as:
  - Regular Expression Denial of Service (ReDoS)
  - Development server bypasses
  - Predictable ID generation
  - Other moderate and high severity issues
- See your package manager's audit logs and GitHub security alerts for details.

### Recommendations
- **Do not deploy this project to production environments.**
- Use only for local development or non-sensitive demos.
- If you wish to use this project in production, you must:
  - Regularly update all dependencies
  - Address all security advisories
  - Perform a thorough security review

---

For questions or to report new vulnerabilities, please open an issue.
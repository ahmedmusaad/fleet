export const frontendFormattedConfig = (config) => {
  const {
    org_info: orgInfo,
    server_settings: serverSettings,
    smtp_settings: smtpSettings,
    sso_settings: ssoSettings,
    host_expiry_settings: hostExpirySettings,
  } = config;

  return {
    ...orgInfo,
    ...serverSettings,
    ...smtpSettings,
    ...ssoSettings,
    ...hostExpirySettings,
  };
};

export default { frontendFormattedConfig };

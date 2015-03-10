// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "linkedin"
});
ServiceConfiguration.configurations.insert({
  service: "linkedin",
  clientId: "75eyjm0oqk5id3",
  secret: "P7oYXt33r3NhUDj0",
  loginStyle: "popup",
});
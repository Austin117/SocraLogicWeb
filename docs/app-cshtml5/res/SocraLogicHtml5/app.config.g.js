window.AppConfig = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\\
<configuration>\\
    <system.serviceModel>\\
        <bindings>\\
            <basicHttpBinding>\\
                <binding name=\"BasicHttpBinding_IService1\" />\\
                <binding name=\"BasicHttpsBinding_IService1\">\\
                    <security mode=\"Transport\" />\\
                </binding>\\
            </basicHttpBinding>\\
        </bindings>\\
        <client>\\
            <endpoint address=\"http://cshtml5-soap-sample.azurewebsites.net/Service1.svc\"\\
                binding=\"basicHttpBinding\" bindingConfiguration=\"BasicHttpBinding_IService1\"\\
                contract=\"ServiceReference1.IService1\" name=\"BasicHttpBinding_IService1\" />\\
            <endpoint address=\"https://cshtml5-soap-sample.azurewebsites.net/Service1.svc\"\\
                binding=\"basicHttpBinding\" bindingConfiguration=\"BasicHttpsBinding_IService1\"\\
                contract=\"ServiceReference1.IService1\" name=\"BasicHttpsBinding_IService1\" />\\
        </client>\\
    </system.serviceModel>\\
</configuration>";
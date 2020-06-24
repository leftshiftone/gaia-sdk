class ClientOptions:
    """
    This class stores the credentials (JWT or HMAC-ApiKey&SecretKey tuple) used by the transporter implementation
    to establish a connection to G.A.I.A.
    """

    def __init__(self, credentials, content_type= "application/json"):
        self.credentials = credentials
        self.content_type = content_type

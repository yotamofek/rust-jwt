initSidebarItems({"enum":[["AlgorithmType","The type of an algorithm, corresponding to the JWA specification."]],"mod":[["openssl","OpenSSL support through the openssl crate. Note that private keys can only be used for signing and that public keys can only be used for verification. ## Examples ``` extern crate jwt; extern crate openssl;"],["rust_crypto","RustCrypto implementations of signing and verifying algorithms. According to that organization, only hmac is safely implemented at the moment."],["store",""]],"trait":[["SigningAlgorithm","An algorithm capable of signing base64 encoded header and claims strings. strings."],["VerifyingAlgorithm","An algorithm capable of verifying base64 encoded header and claims strings."]]});
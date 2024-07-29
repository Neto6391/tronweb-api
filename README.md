# tronweb-api
Project with tronweb technology

# Configuration project
- Set '.env' file variables of environment;

# Install secp256k1 when not install have error of 'Error [ERR_REQUIRE_ESM]: require() of ES Module'
- npm i @noble/secp256k1@1.7.1

# Generate .pem file with openSSL
- openssl ecparam -genkey -name secp256k1 -out private-key.pem

# Extract private key hex
- openssl ec -in private-key.pem -text -noout

# configuration of private key
- clean private key for empty spaces and remove ':' in all the key.

package config

import "os"

type Config struct {
	CassandraHost string
	Keyspace      string
}

func Load() Config {
	host := os.Getenv("CASSANDRA_HOST")
	if host == "" {
		host = "127.0.0.1"
	}

	keyspace := os.Getenv("KEYSPACE")
	if keyspace == "" {
		keyspace = "user_activity_db"
	}

	return Config{
		CassandraHost: host,
		Keyspace:      keyspace,
	}
}

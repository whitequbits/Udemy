# Summary of Data Engineering

- Data engineer will take data from users
- produce it and mantain it
- So data will be organized

## What is Data

- We can use data to make decision, for improving
- There are unstructured, semi-structured and structured data, binary data

## What is Data Engineer

- Data Mining = Extracting knowledge from data
- Big Data = Much Data and need to run on Cloud
- Data Pipeline = All the information is store to a storage using automation

### Data Engineering Flow

1. Data Source
2. Data Stream (Apache Kafka)
3. Data Lake = One big location of data (Hadoop, Amazon S3, Azure Data Lake) => Data Engineering
4. Data Warehouse (Google Big Query, Amazon Redshift, Amazon Athena) => Data Scientist, BI

### Type of Database

[a primer on acid transactions](https://blog.yugabyte.com/a-primer-on-acid-transactions/)

[OLTP vs OLAP](https://techdifferences.com/difference-between-oltp-and-olap.html)

### Hadoop, HDFS, MapReduce

- Able to store so much data on multiple computer
- Batch Processing = Every night to run a job to clean data etc
- Hive = write SQL query in HDFS

### Apache Spark, Flink

- Apache Spark = in memory batch processing
- Hadoop to store data and spark for batch processing
- Flink = Stream processing (Real time processing)

### Kafka, Stream Processing

- Receive messages(data) from App and send it to many location
- example from app to Hadoop, Spark, S3 or Flink
- 

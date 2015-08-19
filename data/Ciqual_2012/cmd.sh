 #!/bin/sh

curl -XPUT localhost:9200/_river/my_csv_river/_meta -d '
{
    "type" : "csv",
    "csv_file" : {
        "folder" : ".",
        "filename_pattern" : ".*\\.csv$",
        "first_line_is_header" : "true",
        "field_separator" : ";",
        "field_id" : "id",
        "field_id_include" : "false",
        "field_timestamp" : "imported_at",
        "concurrent_requests" : "1",
        "charset" : "UTF-8"
    }
}'

public with sharing class FetchCon {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getFetch(Integer numberOfRecords){
        return [select id,LastName,Phone from Contact Limit:numberOfRecords];
    }
}
